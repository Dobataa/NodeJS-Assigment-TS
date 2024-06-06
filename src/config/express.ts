import express, { Express } from 'express';

function setupExpress(app: Express): void {

    app.use('/static', express.static('public'));

    app.use(express.urlencoded({
        extended: true
    }));
}

export default setupExpress;
