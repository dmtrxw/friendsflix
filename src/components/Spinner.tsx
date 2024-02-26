function Spinner() {
    return (
        <>
            <div
                className="absolute h-12 w-12 rounded-full
                            border-8 border-solid border-gray-200"></div>

            <div
                className="absolute h-12 w-12 animate-spin rounded-full
                            border-8 border-solid border-red-700 border-t-transparent"></div>
        </>
    )
}

export default Spinner
