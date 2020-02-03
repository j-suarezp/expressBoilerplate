# Test answers to the guidelines
 ###### All data can be hard-coded, but doesn’t have to be.
    The data is taken from a World Bank api automatically when you perform the requests and it represents the average weather for each year in Colombia almost for the past one hundred years. The endpoint used http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/COL.json
 ###### Think about how you validate information in and out. What makes a nice experience for your users?
    I see this question from two perspectives. The first one is how you validate information in and out, technically speaking, it is useful to test an API by the responses of a request by validating things like response codes, headers, the response body by itself, the time taken by the request and the structure of the response using json schemas for instance in order validate that the information is being shown as expected. It's also important to validate not only the outs, is much more practical to check the entry of information, since the information that is going to be sent is controlled by you. You can try different sets of entries so you test them against the server, see its behaviour and if it is expected or not.
   
    In the other hand what makes a nice experience for the users are two things in my opinion. The first one is the expected behaviour of the API. This is achieved by both, an automated testing process with CI/CD included and a good communication channel with the developers. The second point is an intuitive API design with a exploratory file system structure approach, again in my opinion
 ###### Keep the resource simple.
    The resource has 3 attributes: id, year, weather
 ###### How do you best onboard someone on to your API?
    In this case I see extremely useful the specification of the API using the OpenApi standard as implemented in this project using the swagger plugin. This gives a visual representation of the API, its design and endpoints. Anyway personally I see very useful a visual representation of the API architecture for its complete understanding, so I will sketch a diagram for it too.
 ###### What role should testing play?
    I consider that the testing as I might have mentioned before is an important part of the entire development cycle. In large scale software projects that involve many developers there is room for errors that can affect directly the user experience, something that can cause users lost and damage the business itself, just for give an example of how bugs and defects affect a software. Here is where the testing role achieve its importance by finding issues, defects and bugs, preventing and minimizing the defects that might affect the final user. Testing technologies like test automation, continuous integration and continuous development make more accurate the testing process.
 ###### What else are you passionate about in an API
    I really like the whole idea of communication between software, that's the main goal of an API, communicate. I like the versatility of the technologies since can be used as an universal language for the communication, not only for enable the possibility of communicate heterogeneous systems built in different technologies, but even built in different devices. I find pretty interesting the possibility of integrate a server with other server, or a browser, or a smartphone or even a smartwatch
# expressBoilerplate

Express boilerplate

## Install It
```
npm install
```

## Run It
#### Run in *development* mode:

```
npm run dev
```

#### Run in *production* mode:

```
npm compile
npm start
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push expressBoilerplate
```

### Try It
* Point you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/examples`
   
