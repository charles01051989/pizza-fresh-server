import { Injectable } from "@nestjs/common";
import { UpdateTableDto } from "src/table/dto/update-table.dto";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService{

  create(createProductDto: CreateProductDto){
    return '';
  }

  findAll(){
    return '';
  }

  findOne(id: string) {
    return {id};

  }
  update(id: string, updateProductDto: UpdateTableDto){
    return `update a ${id} product`;
  }

  delete(id: string){
    return '';
  }
}
