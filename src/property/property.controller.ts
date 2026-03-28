import { Body, Controller, Get, ParseIntPipe, Param, Post, Query, ParseBoolPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
    @Get()
    
    findAll(){
        return "All properties";
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
        console.log(typeof id); 
        console.log(typeof sort); 

        return id;
    }

    @Post()

    //@UsePipes(new ValidationPipe({whitelist: true}))


    create(@Body(new ValidationPipe( {whitelist: true, forbidNonWhitelisted: true })) body: CreatePropertyDto){
        return body;
    }
}
