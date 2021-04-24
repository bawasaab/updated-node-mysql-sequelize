let $this;

module.exports = class ResponseService {

    constructor() {
        console.log('inside ResponseService constructor');
        $this = this;
    }

    async sendResponse( res, in_data, in_arr ) {

        return res.send({
            resCode : in_data.hasOwnProperty('resCode') ? parseInt( in_data.code ) : 400,
            success : in_data.hasOwnProperty('success') ? in_data.success : false,
            msg : in_data.hasOwnProperty('msg') ? in_data.msg.toString() : 'unknown',
            data : in_data.hasOwnProperty('data') ? in_data.data : [],
            cnt : in_data.hasOwnProperty('cnt') ? parseInt( in_data.cnt ) : 0,
            err: in_arr ? in_arr : []
        });
    }

    async sendException( res, in_data, in_arr ) {

        if( in_arr ) {
            return res.send({
                resCode : in_data.hasOwnProperty('resCode') ? parseInt( in_data.code ) : 400,
                success : in_data.hasOwnProperty('success') ? in_data.success : false,
                msg : in_data.hasOwnProperty('msg') ? in_data.msg.toString() : 'unknown',
                data : in_data.hasOwnProperty('data') ? in_data.data : [],
                cnt : in_data.hasOwnProperty('cnt') ? parseInt( in_data.cnt ) : 0,
                err: in_arr ? in_arr : []
            });
        } else {
            return res.send({
                resCode : in_data.hasOwnProperty('resCode') ? parseInt( in_data.code ) : 400,
                success : in_data.hasOwnProperty('success') ? in_data.success : false,
                msg : in_data.hasOwnProperty('msg') ? in_data.msg.toString() : 'unknown',
                data : in_data.hasOwnProperty('data') ? in_data.data : [],
                cnt : in_data.hasOwnProperty('cnt') ? parseInt( in_data.cnt ) : 0,
            });
        }
    }
}