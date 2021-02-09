// npx conduct for code-of-conduct.md file
// npx licensed MIT to generate the license file
const logSymbols= require('log-symbols')

const success= '\x1b[1m\x1b[92m%s\x1b[0m'
const info= '\x1b[1m\x1b[38;2;105;55;255m%s\x1b[0m'
const warning= '\x1b[1m\x1b[38;2;254;165;0m%s\x1b[0m'
const error= '\x1b[1m\x1b[91m%s\x1b[0m'

module.exports= (options)=>{

    const defaultOptions= {
        type: 'error',
        msg: 'you forgot to pass the options'
    }

    const opts= {...defaultOptions, ...options}

    const name= opts.name ? opts.name.toUpperCase() : opts.type.toUpperCase()

    if(opts.type=== 'success'){
        console.log(`\n${logSymbols.success} ${success}\n`, `${name}: ${opts.msg}`)
    }
    if(opts.type=== 'info'){
        console.log(`\n${logSymbols.info} ${info}\n`, `${name}: ${opts.msg}`)
    }
    if(opts.type=== 'warning'){
        console.log(`\n${logSymbols.warning} ${warning}\n`, `${name}: ${opts.msg}`)
    }
    if(opts.type=== 'error'){
        console.log(`\n${logSymbols.error} ${error}\n`, `${name}: ${opts.msg}`)
    }


}
