import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                'min-h-[100px] resize-y border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold dark:focus:border-gold focus:ring-0 dark:focus:ring-0 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        ></textarea>
    );
});
