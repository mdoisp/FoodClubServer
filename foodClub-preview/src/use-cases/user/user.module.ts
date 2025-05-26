import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserController } from "./user.controller";
import { CreateUserService } from "./services/create-user.service";
import { DeleteUserService } from "./services/delete-user.service";
import { GetUserByIdService } from "./services/get-user-byid.service";
import { ListUsersService } from "./services/list-users.service";
import { UpdateUserService } from "./services/update-user.service";
import { userProvider } from "src/database/providers/user.provider";
import { UserRepository } from "src/database/repositories/user.repository";

@Module({
  imports: [DatabaseModule],
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