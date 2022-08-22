import { TcpClientModule } from './sample/tcp.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TcpClientModule, ConfigModule.forRoot()],
  providers: [],
  controllers: [],
})
export class AppModule {}
