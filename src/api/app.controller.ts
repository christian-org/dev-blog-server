import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  @Render("index")
  index() {
    return { message: "Hello World!" };
  }
}
