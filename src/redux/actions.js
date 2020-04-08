export const SELECT_CHOICE = "SELECT_CHOICE";

export const selectChoice = title => {
    return {
        type: SELECT_CHOICE,
        value: title,
    }
}
