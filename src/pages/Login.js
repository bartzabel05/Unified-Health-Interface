const Login = () => {
    return (
        <div className="mt-5 p-5 container">
            <div class="form-group border p-5 m-5">
        <form action="/login" method="post">
        <div class="form-group">
            <label>Hosp ID </label>
            <input type="text" class="form-control" placeholder="Enter Hosp ID" name="hid"></input>
            <br/>
        </div>
        <div class="form-group">
            <label>Enter Password </label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter Pass" name="hpass"></input>
        </div>
        <div class="form-group mt-3">
            <button type="submit" class="btn btn-dark">Login</button>
        </div>
        </form>
        </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );

}

export default Login;