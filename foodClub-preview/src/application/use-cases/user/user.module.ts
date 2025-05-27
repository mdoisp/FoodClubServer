import { Module } from "@nestjs/common";
import { InfrastructureModule } from "src/infrastructure/infrastructure.module";
import { UserController } from "../../../interfaces/http/controllers/user.controller";
import { CreateUserService } from "./create-user.service";
import { DeleteUserService } from "./delete-user.service";
import { GetUserByIdService } from "./get-user-byid.service";
import { ListUsersService } from "./list-users.service";
import { UpdateUserService } from "./update-user.service";
import { userProvider } from "src/infrastructure/providers/user.provider";
import { UserRepository } from "src/infrastructure/database/repositories/user.repository";

@Module({
  imports: [InfrastructureModule],
    controllers: [UserController],
    providers: [
        ...userProvider,
        UserRepository,
        ListUsersService,
        GetUserByIdService,
        CreateUserService,
        UpdateUserService,
        DeleteUserService
    ],
    exports: [
        ListUsersService,
        GetUserByIdService,
        CreateUserService,
        UpdateUserService,
        DeleteUserService
    ]
})
export class UserModule {}