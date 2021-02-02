import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/users/entities/user.entity';

type AllowedRoles = keyof UserRole;
export const Role = (roles: AllowedRoles[]) => SetMetadata('roles', roles);
