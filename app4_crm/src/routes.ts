import { Router } from 'express';
import UserModel from './dao/UserModel'
import LeadModel from './dao/LeadModel'
import ContractModel from './dao/ContractModel'

const route = Router();

route.get('/', async (req,res) => {
    const contract = new ContractModel();
    
    console.log(contract);
});

export default route;