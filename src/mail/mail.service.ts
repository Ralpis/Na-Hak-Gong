import got from 'got';
import * as FormData from 'form-data';
import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from '../common/common.constants';
import { EmailVars, MailModuleOptions } from './mail.interfaces';


@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {
  }
  private async sendEmail(subject:string,to:string, template:string, emailVars: EmailVars[]){
      const form = new FormData();
      form.append('from', `NA-HAK-GONG <mailgun@${this.options.domain}>`);
    form.append('to', `rotjsdn1@naver.com`);
    form.append('subject', template);
    form.append('template',`check`);
    emailVars.forEach(eVar=>form.append(eVar.key, eVar.value));
    try {
       await got(`https://api.mailgun.net/v3/${this.options.domain}/messages`,{
        method:'POST',
        headers:{
            Authorization:`Basic ${Buffer.from(`api:${this.options.apiKey}`,).toString('base64')}`,
        },
        body: form,
    });
    } catch (error) {
        console.log(error);
    }
  }

  sendVerificationEmail(email:string, code:string) {
    this.sendEmail("Verify Your Email","verify-email",[{"key":code,value:code},{
      key:'username', value: email,
    }
  ]).then(()=>{
      console.log("Message sent");
      }).catch((error)=>{
      console.log(error.response.body);
      });
  }
}
