/* eslint-disable no-console */
import bcrypt from 'bcrypt';
import { User } from "../modules/user/user.model";
import { envVariable } from '../config/envVariable';



// Create Admin User 
export const seedCreateAdminUser = async () => {

    try {
        const name = envVariable.USER_NAME;
        const email = envVariable.USER_EMAIL;
        const phone = envVariable.USER_PHONE;
        const password = envVariable.USER_PASSWORD;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            console.log("Admin Already Created.");
            return;
        }

        const hashedPassword = await bcrypt.hash(password as string, Number(envVariable.BCRYPT_SALT_ROUND));

        const userData = {
            name,
            email,
            password: hashedPassword,
            phone
        };

        const result = await User.create(userData);

        if (result._id) {
            console.log("Admin Created Successfully.")
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
            throw error;
        }
    }
};