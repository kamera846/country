const generateCallingCodeFromIDD = (idd) => {
    const root = idd?.root?.replace('+', ''); // Remove the '+' sign
    const suffix = idd?.suffixes[0]; // Get the first suffix from the array

    return root + suffix;
}

export { generateCallingCodeFromIDD }