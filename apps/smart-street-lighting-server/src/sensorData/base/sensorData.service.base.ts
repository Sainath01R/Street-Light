/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SensorData as PrismaSensorData } from "@prisma/client";

export class SensorDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SensorDataCountArgs, "select">
  ): Promise<number> {
    return this.prisma.sensorData.count(args);
  }

  async sensorDataItems(
    args: Prisma.SensorDataFindManyArgs
  ): Promise<PrismaSensorData[]> {
    return this.prisma.sensorData.findMany(args);
  }
  async sensorData(
    args: Prisma.SensorDataFindUniqueArgs
  ): Promise<PrismaSensorData | null> {
    return this.prisma.sensorData.findUnique(args);
  }
  async createSensorData(
    args: Prisma.SensorDataCreateArgs
  ): Promise<PrismaSensorData> {
    return this.prisma.sensorData.create(args);
  }
  async updateSensorData(
    args: Prisma.SensorDataUpdateArgs
  ): Promise<PrismaSensorData> {
    return this.prisma.sensorData.update(args);
  }
  async deleteSensorData(
    args: Prisma.SensorDataDeleteArgs
  ): Promise<PrismaSensorData> {
    return this.prisma.sensorData.delete(args);
  }
}
