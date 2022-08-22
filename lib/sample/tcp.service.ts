import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Socket, SocketConnectOpts } from 'net'
import { boundMethod } from 'autobind-decorator'

interface MyOption {
  readonly HOST: string
  readonly PORT: number
}

@Injectable()
export class TcpClientService implements OnModuleInit, OnModuleDestroy {
  private readonly socket = new Socket()
  private reconnect = false
  private readonly socketConnectOpts: SocketConnectOpts

  constructor(private readonly option: ConfigService<MyOption>) {
    this.socketConnectOpts = {
      host: this.option.get('HOST', 'localhost'),
      port: this.option.get('PORT', 80),
    }
  }

  onModuleInit() {
    this.socket
      .on('close', this.onClose)
      .on('timeout', this.onTimeout)
      .on('connect', this.onConnect)
      .on('error', this.onError)
      .on('end', this.onEnd)
      .on('data', this.onData)

    this.makeConnection()
  }
  onModuleDestroy() {
    this.socket.end(() => console.log('Disconnected!!'))
  }

  @boundMethod
  makeConnection() {
    this.socket.connect(this.socketConnectOpts)
  }

  @boundMethod
  onEnd() {
    this.socket.destroy()
    console.log('Requested an end to the TCP connection')
  }

  @boundMethod
  async onData(data: Buffer) {
    console.log('data: ' + data)
  }

  @boundMethod
  onClose() {
    if (!this.reconnect) {
      this.reconnect = true
      console.log('Reconnecting...')
    }
    setTimeout(this.makeConnection, 3_000)
  }

  @boundMethod
  onTimeout() {
    console.error('timeout')
  }

  @boundMethod
  onError(err: Error) {
    console.error(err)
  }

  @boundMethod
  onConnect() {
    console.log('connected')
    this.reconnect = false
  }
}
