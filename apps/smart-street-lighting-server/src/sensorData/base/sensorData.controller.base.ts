/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SensorDataService } from "../sensorData.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SensorDataCreateInput } from "./SensorDataCreateInput";
import { SensorData } from "./SensorData";
import { SensorDataFindManyArgs } from "./SensorDataFindManyArgs";
import { SensorDataWhereUniqueInput } from "./SensorDataWhereUniqueInput";
import { SensorDataUpdateInput } from "./SensorDataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SensorDataControllerBase {
  constructor(
    protected readonly service: SensorDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SensorData })
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSensorData(
    @common.Body() data: SensorDataCreateInput
  ): Promise<SensorData> {
    return await this.service.createSensorData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SensorData] })
  @ApiNestedQuery(SensorDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sensorDataItems(@common.Req() request: Request): Promise<SensorData[]> {
    const args = plainToClass(SensorDataFindManyArgs, request.query);
    return this.service.sensorDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SensorData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sensorData(
    @common.Param() params: SensorDataWhereUniqueInput
  ): Promise<SensorData | null> {
    const result = await this.service.sensorData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SensorData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSensorData(
    @common.Param() params: SensorDataWhereUniqueInput,
    @common.Body() data: SensorDataUpdateInput
  ): Promise<SensorData | null> {
    try {
      return await this.service.updateSensorData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          typeField: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SensorData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSensorData(
    @common.Param() params: SensorDataWhereUniqueInput
  ): Promise<SensorData | null> {
    try {
      return await this.service.deleteSensorData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          typeField: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
