import request from 'supertest';
import app from '../src/app';

describe('Test Root path', () => {
    it('should response the initial GET method', async () => {
        const response = await request(app)
            .get('/');
        
        expect(response.status).toBe(200);
    })
});