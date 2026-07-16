import { Body, Controller, Post } from '@nestjs/common';
import type{ SignUpDto, SignInDto } from './dtos/auth';

@Controller('auth')
export class AuthController {
    @Post('signUp')
    async signUp(@Body() body: SignUpDto) {
        console.log({body});
        return body;
    }

    @Post('signIn')
    async signIn(@Body() body: SignInDto) {
        console.log({body});
        return body;
    }
}
