import User from "../Models/userModel.js";
const registerController = async (req, res) => {
    const {
        username,
        password,
        role,
        email
    } = req.body
    try {
        if (!username || !password || !role || !email) {
            return res.status(400).send({ success: false, message: 'All fields are required' });
        }

        const existingUser = await User.findOne({
            $or: [
                { email: email },
                { username: username }
            ]
        });

        if (existingUser) {
            return res.status(400).send({ success: false, message: 'You Already Registered' })
        }

        if (role == 'Admin' || role == 'Manager') {
            return res.status(400).send({ success: false, message: 'You can not access as Admin or Manager' });
        }

        const newUser = new User({
            username,
            email,
            password,
            role,
        });

        await newUser.save();

        return res.status(201).send({
            success: true,
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const loginController = async (req, res) => {
    const {
        email,
        username,
        password
    } = req.body;

    try {
        if (!username && !email) {
            return res.status(400).send({ success: false, message: 'Either Email Or Username is rRequired' });
        }
        if (!password) {
            return res.status(400).send({ success: false, message: 'Password is Required' });
        }

        const existingUser = await User.findOne({
            $or: [
                { email: email },
                { username: username }
            ]
        });

        if (!existingUser) {
            return res.status(400).send({ success: false, message: 'You Not Register Yet' });
        }

        return res.status(201).send({
            success: true,
            message: "Login Sucessfully",
        });

    } catch (error) {
        console.error('Error during Login:', error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const logoutController = (req, res) => {
    try {
        return res
            .status(200)
            .send({ success: true, message: "Logout successful" });
    } catch (error) {
        console.error('Error during logout:', error);
        return res
            .status(500)
            .send({ success: false, message: 'Internal Server Error' });
    }
}

export { registerController, loginController, logoutController };