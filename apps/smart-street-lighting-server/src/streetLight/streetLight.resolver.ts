import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StreetLightResolverBase } from "./base/streetLight.resolver.base";
import { StreetLight } from "./base/StreetLight";
import { StreetLightService } from "./streetLight.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StreetLight)
export class StreetLightResolver extends StreetLightResolverBase {
  constructor(
    protected readonly service: StreetLightService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
