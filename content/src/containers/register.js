import React from 'react'
import { PureComponent } from 'react'

export default class Register extends PureComponent {

    render() {
        return (

            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        )
    }
}