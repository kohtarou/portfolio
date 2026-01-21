const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-8 dark:bg-gray-900 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} KOUTAROU NAKAO. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
