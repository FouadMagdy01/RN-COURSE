function limitTextLength(length, string) {
    if (string) {
        return string.length < length
            ? string
            : `${string.substring(0, length)}...`;
    }
}
export default limitTextLength;