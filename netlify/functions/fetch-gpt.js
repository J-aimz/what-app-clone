const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-6AqPbP0J1mDugwuoFIhktgSm",
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);


exports.handler = async (event, res) => {
    const {message} = JSON.parse(event.body)

    try {

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            temperature: .7,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ["{}"],
        });


        return ({
            statusCode: 200,
            body: JSON.stringify({
                data: response.data.choices[0].text 
            })
        })

    } catch (error) {
        console.log(error)
    }


}


