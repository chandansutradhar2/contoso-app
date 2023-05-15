import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Neo4jService } from '@dbc-tech/nest-neo4j';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {

  constructor(private neo: Neo4jService, @Inject('PAYMENT_SERVICE') private paymentClientMS: ClientProxy) {
    try {
      this.paymentClientMS.connect(); //lazy loaded method to connect to the microservice
    } catch (error) {
      console.log(error);
    }

  }

  async create(dto: CreateOrderDto) {


    const query = `CREATE (o:Order {id: $id, userId: $userId,
      productIds: $productIds, orderDate: $orderDate,
      orderStatus: $orderStatus, orderTotal: $orderTotal,
      orderAddress: $orderAddress}) RETURN o`;
    const params = {
      id: Date.now().toString(),
      ...dto
    }
    const result = await this.neo.write(query, params);

    //this.paymentClientMS.send(pattern, payload);

    this.paymentClientMS.send({ cmd: 'makeUPIPayment' }, { orderId: params.id, orderTotal: dto.orderTotal }).subscribe(res => {
      console.log(res);
    });
    return result;

  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
