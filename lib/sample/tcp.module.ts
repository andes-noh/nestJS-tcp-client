/*
https://docs.nestjs.com/modules
*/
import { TcpClientService } from './tcp.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [TcpClientService],
})
export class TcpClientModule {}
