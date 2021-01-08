import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';
import { UsersService } from './users.service';

const mockRepository = ()=>({
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
});

const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
};

const mockMailService = {
  sendVerificationEmail: jest.fn(),
};


type MockRepository<T> = Partial<Record<keyof Repository<User>,jest.Mock>>;

describe('UserService', () => {
  let service: UsersService;
  let usersRepository:MockRepository<User>;
  let verificationsRepository:MockRepository<Verification>;
 
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository(),
        },
        {
          provide: getRepositoryToken(Verification),
          useValue: mockRepository(),
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: MailService,
          useValue: mockMailService,
        },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
    usersRepository =module.get(getRepositoryToken(User));
    verificationsRepository = module.get(getRepositoryToken(Verification));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe("createAccount",()=>{ 
    const createAccountArgs={
        email:'',
        password:'',
        role:0,
    }

    it("Should fail if user exists.",async ()=>{
         usersRepository.findOne.mockResolvedValue({
             id:1,
             email:"hello"
         }) 
         const result = await service.createAccount(createAccountArgs);
         expect(result).toMatchObject({ok: false, error: 'There is a user with that email already'
        })
      });
    it(('should create a new user'),async ()=>{
    usersRepository.findOne.mockResolvedValue(undefined);
    usersRepository.create.mockReturnValue(createAccountArgs);
    usersRepository.save.mockResolvedValue(createAccountArgs);
    verificationsRepository.create.mockReturnValue(createAccountArgs);
    verificationsRepository.save.mockResolvedValue(createAccountArgs);
    await service.createAccount(createAccountArgs);
    expect(usersRepository.create).toHaveBeenCalledTimes(1);
    expect(usersRepository.create).toHaveBeenCalledWith(createAccountArgs);
    expect(usersRepository.save).toHaveBeenCalledTimes(1);
    expect(usersRepository.save).toHaveBeenCalledWith(createAccountArgs);
    expect(verificationsRepository.create).toHaveBeenCalledTimes(1);
    expect(verificationsRepository.create).toHaveBeenCalledWith({
      user:createAccountArgs,
    })
    expect(verificationsRepository.save).toHaveBeenCalledTimes(1);
    expect(verificationsRepository.save).toHaveBeenCalledWith(createAccountArgs);
    
  });
    it("Should fail on exception.",async()=>{
      usersRepository.findOne.mockRejectedValue(new Error());
      const result = await service.createAccount(createAccountArgs);
      expect(result).toEqual({ ok: false, error: "Couldn't create account" });
    })
})
  describe('login',()=>{
    const loginArgs ={
      email:'bs@email.com', 
      password:"bs.password"
    }
    it('should fail if user does not exist ', async()=>{
      usersRepository.findOne.mockResolvedValue(null);
      const result = await service.login(loginArgs);
      expect(usersRepository.findOne).toHaveBeenCalledTimes(1);
      expect(usersRepository.findOne).toHaveBeenCalledWith(expect.any(Object),expect.any(Object));
      
      expect(result).toEqual({
        ok: false,
        error: 'user not found',
      });
    });
    it('should fail if the password is wronng',async()=>{
      const mockUser ={
        id:1,
        checkPassword:jest.fn(()=>Promise.resolve(false)),
      }
      usersRepository.findOne.mockResolvedValue(mockUser);
      const result = await service.login(loginArgs);
      console.log(result);
      expect(result).toEqual({
        ok: false,
        error: 'wrong password',
      });
    })
  });
  it.todo('findById');
  it.todo('editProfile');
  it.todo('verifyEmail');
});