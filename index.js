// npx conduct for code-of-conduct.md file
// npx licensed MIT to generate the license file
const chalk= require('chalk')
const logSymbols= require('log-symbols')

const success= chalk.bold.green
const info= chalk.bold.hex('#6937FF')
const warning= chalk.bold.keyword('orange')
const error= chalk.bold.red

module.exports= (options)=>{

    const defaultOptions= {
        type: 'error',
        msg: 'you forgot to pass the options'
    }

    const opts= {...defaultOptions, ...options}

    const name= opts.name ? opts.name.toUpperCase() : opts.type.toUpperCase()

    if(opts.type=== 'success'){
        console.log(`\n${logSymbols.success}${success(` ${name}: `+ opts.msg)}\n`)
    }
    if(opts.type=== 'info'){
        console.log(`\n${logSymbols.info}${info(` ${name}: `+opts.msg)}\n`)
    }
    if(opts.type=== 'warning'){
        console.log(`\n${logSymbols.warning}${warning(` ${name}: `+opts.msg)}\n`)
    }
    if(opts.type=== 'error'){
        console.log(`\n${logSymbols.error}${error(` ${name}: `+opts.msg)}\n`)
    }


}