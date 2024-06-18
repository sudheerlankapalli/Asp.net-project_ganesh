const initialState = {
  students: []
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_STUDENTS':
          return {
              ...state,
              students: action.payload
          };
      case 'ADD_STUDENT':
          return {
              ...state,
              students: [...state.students, action.payload]
          };
      // Other cases for updating and deleting students
      default:
          return state;
  }
};

export default studentReducer;
