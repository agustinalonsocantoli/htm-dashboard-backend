import app, { PORT } from "./app";
import 'dotenv/config';

// SERVER
try {
    app.listen(PORT, () => {
        console.log(`Server Run`);
    })
} catch(err) {
    console.log(err);
}