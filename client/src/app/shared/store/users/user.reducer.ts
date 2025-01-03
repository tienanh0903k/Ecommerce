import { createReducer, on } from '@ngrx/store';

import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.actions';
import { initialUserState } from './user.state';

export const userReducer = createReducer(
    initialUserState,
    on(loadUsers, (state) => state),
    on(loadUsersSuccess, (state, { users }) =>{
        localStorage.setItem('users', JSON.stringify(users));
        return {
            ...state,
            users,
        }
    }),
    on(loadUsersFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);
