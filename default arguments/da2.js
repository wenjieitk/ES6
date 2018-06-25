function User (id) {
    this.id = id;
}

const generatedId = () => Math.random() * 999999;

const createAdminUser = (user = new User(generatedId())) => {
    user.admin = true;
    return user;
}

console.log(createAdminUser());