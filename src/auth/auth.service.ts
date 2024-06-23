import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);
    if (!user) throw new UnauthorizedException();
    const { password, email } = user;
    const passwordIsMatch = await bcrypt.compare(signInDto.password, password);
    if (!passwordIsMatch) throw new UnauthorizedException();
    return email;
  }
}
