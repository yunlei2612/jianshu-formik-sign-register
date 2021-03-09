import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from 'antd'
import { WeiboOutlined, WechatFilled, QqOutlined } from '@ant-design/icons';
import { signIn } from '../services/user'
import {
  Link
} from "react-router-dom";

export default function SignIn(props) {
	const initialValues = {
		// 默认值即使没有， 这个结构也得写, 不然有警告
		email: "",
		password: "",
	};

	const schema = Yup.object({
		email: Yup.string().required("手机号或邮箱不能为空"),
		password: Yup.string().min(8, "密码不能少于8位").required("请填写密码"),
	});

	const handleSubmit = async (values, formikBag) => {
    signIn(values)
		 .then(res=>{
			 if(res.status === 200){
          message.success('登录成功！')
			 }else{
				  message.error('登录失败！')
			 }
		 })
		 .catch(e=>{
			 console.log(e.message)
			 message.error('登录失败，邮箱或密码错误')
		 })
	};
	return (
		<div className="sign-in">
			<div className="tform in">
				<div className="form-title">
					<span className="active">登录</span>&nbsp;&nbsp;●&nbsp;&nbsp;<span><Link to="/sign_up">注册</Link></span>
				</div>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={schema}
				>
					<Form>
						<div className="form-item">
							<Field
								name="email"
								placeholder="邮箱"
								autoComplete="new-password"
								className={`input-style emailUp`}
							/>
							<div className="field-error">
								<ErrorMessage name="email" />
							</div>
						</div>

						<div className="form-item">
							<Field
								name="password"
								placeholder="密码"
								autoComplete="new-password"
								type="password"
								className={`input-style pwd`}
							/>
							<div className="field-error">
								<ErrorMessage name="password" />
							</div>
						</div>

						<input
							className={`sumbit-btn`}
							value="登录"
							type="submit"
						/>
					</Form>
				</Formik>
				<div className='more-sign'>
					<h6>
						社交帐号登录
				</h6>
					<div className = 'more-sign-icon'>
						<span>
							<WeiboOutlined style={{ fontSize: '24px', color: '#e05244' }} />
						</span>
						<span>
							<WechatFilled style={{ fontSize: '24px', color: '#00bb29' }} />
						</span>
						<span>
							<QqOutlined style={{ fontSize: '24px', color: '#08c' }} />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
