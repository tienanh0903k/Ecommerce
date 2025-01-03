//create store in user.state.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

export interface UserState {
    users: any[];
}

export const initialUserState: UserState = {
    users: [],
};
