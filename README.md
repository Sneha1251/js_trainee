# js_trainee
                 12 factor App

The twelve-factor app is a methodology for building software-as-a-service apps that
1=> Use declarative formats to minimize time and cost for new developers joining the projects
2=> Offers Maximum portibility between execution environment
3=> Suitable for deployment on modern cloud platforms

The twelve factors are
# Code Base
There should be exactly one codebase for a service for many deployments

# Dependencies
Explicitly declare and islote the dependencies
Advantage is seggration and loosely coupling

# Config
Stores the configs in the environment
Maintain in environment variables and default values

# Backing Services
Treat backing services as attached resources
flexibility and efficiency in SDLC

# Build,release,run
Strictly separate build,release,deploy stages
Build- source code build and maintain build artifacts
release- apply config settings
run- run or deploy in environment

# Processes
Applications should be deployed as one or more stateless processes

# Port Binding
Export services via port binding
Should be identifiable to the network by port number

# Concurrency
scale out via the process model to
Separate the process so they can scale up and down 

# Disposability
Maximum robustness with fast startup and graceful shutdown

# Dev/prod parity
Keep devlopment, staging and production as similar as possible
Keep same environment

# Logs
Treat logs as event steams, send log data in a streams for all consumers

# Admin process
run admin/management tasks as one off processes


                                 Atomic Design
Atomic design is a methodology for building design systems. The idea is that we can take the basic building blocks of living things and give our UI a hierarchical structure based on it. 

It has five stages

# Atoms 
These are the simplest form of UI, consisting of things like headers, labels, input fields, buttons, etc.

# Molecules 
These are a combination of atoms that form more complex pieces of our UI, such as a search field with a submit button.

# Organisms 
build on top of molecules and orchestrate larger parts of the UI. This can include a list of products, a header, forms, etc. 

# Templates
These are where our pages start to come together, giving context to all of our organisms and molecules by giving them a unified purpose. 

# Pages
As the name implies, is our final page with all its content. The difference between pages and templates is that templates don’t provide any content.