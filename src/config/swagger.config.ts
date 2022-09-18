import { DocumentBuilder } from "@nestjs/swagger";

export const configSwagger = new DocumentBuilder()
  .setTitle("BDS")
  .setDescription("BDS BE v1")
  .setVersion("1.0")
  .addTag("bds")
  .addBearerAuth(
    {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
      name: "JWT",
      description: "Enter JWT token",
      in: "header",
    },
    "JWT-auth", // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();
