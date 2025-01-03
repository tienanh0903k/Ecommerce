import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users');

// Tải thành công
export const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ users: any[] }>() // Dữ liệu tải về
);

// Tải thất bại
export const loadUsersFailure = createAction(
    '[User] Load Users Failure',
    props<{ error: any }>()
);
