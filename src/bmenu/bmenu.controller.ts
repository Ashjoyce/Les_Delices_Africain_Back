import { Controller,Post,Body,Get,Put,Param,Delete,Patch } from '@nestjs/common';
import { BmenuService } from './bmenu.service';
import { BmenusEntity } from './bmenus.entity/bmenus.entity';
import { UpdateBmenuDto } from './updatebmenu.dto';

@Controller('bmenu')
export class BmenuController {

    constructor(private service:BmenuService){}

    @Get(':id')
    get(@Param() params) {
        return this.service.getBmenu(params.id);
    }

    @Post()
    create(@Body() bmenu:BmenusEntity){
        return this.service.createBmenu(bmenu);
    }

    @Patch(':id')
    updateBmenu(@Param('id') id: string, @Body() updateBmenuDto: UpdateBmenuDto) {
    return this.service.updateBmenu(+id, updateBmenuDto);
    }

    @Delete(':id')
    deleteBmenu(@Param()  params) {
        return this.service.deleteBmenu(params.id)
    }
}
