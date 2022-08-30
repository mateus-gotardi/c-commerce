CREATE TABLE "public.Products" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"price" money NOT NULL,
	"bar_code" varchar NOT NULL UNIQUE,
	"createdAt" TIMESTAMP(6) NOT NULL DEFAULT now(),
	"upfatedAt" TIMESTAMP(6),
	"promotionPrice" money,
	"activePromotion" BOOLEAN NOT NULL DEFAULT 'false',
	"promotionExpire" TIME,
	CONSTRAINT "Products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public.productImages" (
	"id" serial NOT NULL,
	"productid" integer NOT NULL,
	"link" integer NOT NULL,
	"createdAt" TIMESTAMP(6) NOT NULL DEFAULT now(),
	"upfatedAt" TIMESTAMP(6),
	CONSTRAINT "CartItem_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public.CartItem" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"productid" integer NOT NULL,
	"createdAt" TIMESTAMP(6) NOT NULL DEFAULT now(),
	"upfatedAt" TIMESTAMP(6),
	CONSTRAINT "CartItem_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"createdAt" TIMESTAMP(6) NOT NULL,
	"upfatedAt" TIMESTAMP(6) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("id");
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_fk1" FOREIGN KEY ("productid") REFERENCES "Products"("id");
ALTER TABLE "productImages" ADD CONSTRAINT "productImages_fk0" FOREIGN KEY ("productid") REFERENCES "Products"("id");
