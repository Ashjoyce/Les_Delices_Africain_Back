import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BmenusEntity } from './bmenus.entity/bmenus.entity';
import { UpdateBmenuDto } from './updatebmenu.dto';

@Injectable()
export class BmenuService {

    constructor(@InjectRepository(BmenusEntity) private BmenuRepository: Repository<BmenusEntity>){}

    async getBmenus(bmenu:BmenusEntity): Promise<BmenusEntity[]>{
        return await this.BmenuRepository.find();
    }

    async getBmenu(_id: number): Promise<BmenusEntity[]>{
        return await this.BmenuRepository.find({
            select: ["name","price","description","image"],
            where:[{"id":_id}]
        });
    }

    async createBmenu(bmenu: BmenusEntity){
        this.BmenuRepository.save(bmenu);
    }

    async updateBmenu(id: number, updateBmenuDto: UpdateBmenuDto) {
        return `This action updates a #${id} bmenu, with ${JSON.stringify(
        updateBmenuDto,
        )} fields`;
    }

    async deleteBmenu(bmenu: BmenusEntity){
        this.BmenuRepository.delete(bmenu);
    }
}
