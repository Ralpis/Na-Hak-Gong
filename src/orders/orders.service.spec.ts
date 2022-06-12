import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { MailService } from 'src/mail/mail.service';
import { User } from 'src/users/entities/user.entity';
import { Verification } from 'src/users/entities/verification.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderService } from './orders.service';

const userMockRepository = () => ({
    findOne: jest.fn(),
    save: jest.fn(),
    create: jest.fn(),
    findOneOrFail: jest.fn(),
    delete: jest.fn(),
  });


type UserMockRepository<T> =  Partial<Record<keyof Repository<User>, jest.Mock>>;
type OrderMockRepository<T> = Partial<
  Record<keyof Repository<Order>, jest.Mock>
>;

describe('OrderService', () => {
    let userService :UsersService;
    let usersRepository = userMockRepository<User>;

    let OrderService : OrderService

  let service: UsersService;
  let verificationsRepository: mockRepository<Verification>;
  let jwtService: JwtService;
  let mailService: MailService;

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
    mailService = module.get<MailService>(MailService);
    usersRepository = module.get(getRepositoryToken(User));
    verificationsRepository = module.get(getRepositoryToken(Verification));
    jwtService = module.get<JwtService>(JwtService);
  });
});
