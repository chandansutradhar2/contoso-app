import { Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Get()
  getHello(): string {
    return this.paymentService.getHello();
  }


  @MessagePattern({ cmd: 'makeUPIPayment' })
  makeUPIPayment({ orderId, orderTotal }) {
    //todo: initiate switch communication to make payment

    console.log(orderId, orderTotal)

    return { status: 'success', message: 'UPI Payment Successful' };
  }


  @MessagePattern({ cmd: 'makeCardPayment' })
  makeCardPayment() {
    //todo: initiate card payment via master/visa/rypay
    return { status: 'success', message: 'Card Payment Successful' };
  }

  @EventPattern('makeNetBankingPayment')
  makeNetBankingPayment() {
    //initate netwbanking payment
  }


  selectPaymentType() {

  }



}
