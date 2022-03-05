'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');

const request = supertest(server.app);
const {db}=require("../src/models/index");
//before all testing connect to postgres sql server to connect whith db
beforeAll( async () =>{
    await db.sync();
})
//after the test done drop the cinnect whoth pg sql server if i dont do that error happen in the test say timeout
afterAll( async () =>{
    await db.drop();
})
describe('testing API server',()=>{

    it('testing bad route',async()=>{
        const response = await request.get('/undefinedRout');
        expect(response.status).toEqual(404);    
    })

    it('test bad method', async()=>{
        const response = await request.post('/');
        expect(response.status).toEqual(404)
    })

})
describe("testing food routes",()=>{
    it("test creating newFood",async()=>{
        const response=await request.post("/food").send({
            "favFood":"potato",
            "calories":100
        })
        expect(response.status).toEqual(201);
    })
    it("test get all recordes",async()=>{
        const response=await request.get("/food");
        expect(response.status).toEqual(200);
    })
    it('test get one record by id',async()=>{
        const id =1;
        const response=await request.get(`/food/${id}`);
        expect(response.status).toEqual(200);
    })
    it("test update one record by id",async()=>{
        const id =1;
        const response=await request.put(`/food/${id}`).send({
            "favFood":"potato",
            "calories":100
        });
        expect(response.status).toEqual(201);
    })
    it("test delete one record by id",async()=>{
        const id =1;
        const response=await request.delete(`/food/${id}`);
        expect(response.status).toEqual(204);
    })
})
describe("testing clothes routes",()=>{
    it("test creating newClothes",async()=>{
        const response=await request.post("/clothes").send({
            "clothesType":"test",
            "price":100
        })
        expect(response.status).toEqual(201);
    })
    it("test get all recordes",async()=>{
        const response=await request.get("/clothes");
        expect(response.status).toEqual(200);
    })
    it('test get one record by id',async()=>{
        const id =1;
        const response=await request.get(`/clothes/${id}`);
        expect(response.status).toEqual(200);
    })
    it("test update one record by id",async()=>{
        const id =1;
        const response=await request.put(`/clothes/${id}`).send({
            "clothesType":"T-shirt",
            "price":120
        });
        expect(response.status).toEqual(201);
    })
    it("test delete one record by id",async()=>{
        const id =1;
        const response=await request.delete(`/clothes/${id}`);
        expect(response.status).toEqual(204);
    })
})