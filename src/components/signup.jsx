import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from 'antd'
import { WechatFilled, QqOutlined } from '@ant-design/icons';
import { signUp } from '../services/user'
import {
	Link
} from "react-router-dom";


export default function SignUp(props) {
	const initialValues = {
		// 默认值即使没有， 这个结构也得写, 不然有警告
		username: "",
		email: "",
		password: "",
	};

	const schema = Yup.object({
		username: Yup.string().required("用户名不能为空"),
		email: Yup.string().required("手机号或邮箱不能为空"),
		password: Yup.string().min(8, "密码不能少于8位").required("请填写密码"),
	});

	const handleSubmit = async (values, formikBag) => {
		signUp(values)
			.then(res => {
				if (res.status === 200) {
					message.success('注册成功！')
				} else {
					message.error('注册失败！')
				}
			})
			.catch(e => {
				console.log(e.message)
				message.error('注册失败！')
			})

	};
	return (
		<div className="sign-up">
			<div className="tform ">
				<div className="form-title">
					<span><Link to="/sign_in">登录</Link></span>&nbsp;&nbsp;●&nbsp;&nbsp;
					<span className="active">注册</span>
				</div>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={schema}
				>
					<Form>
						<div className="form-item">
							<Field
								name="username"
								placeholder="用户名"
								autoComplete="new-password"
								className={`input-style username`}
							/>
							<div className="field-error">
								<ErrorMessage name="username" />
							</div>
						</div>
						<div className="form-item">
							<Field
								name="email"
								placeholder="邮箱"
								autoComplete="new-password"
								className={`input-style email`}
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
							className={`sumbit-btn register-btn`}
							value="注册"
							type="submit"
						/>

						<div className="register-box">
							<p className="register-tips">
								点击 “注册” 即表示您同意并愿意遵守简书{" "}
								<span className="register-tips-info">
									用户协议
								</span>{" "}
								和
								<span className="register-tips-info">
									隐私政策
								</span>{" "}
								。
							</p>
						</div>
					</Form>
				</Formik>
				<div className='more-sign'>
					<h6>
						社交帐号直接注册
				</h6>
					<div className = 'more-sign-icon'>
						{/* <span>
							<WeiboOutlined style={{ fontSize: '24px', color: '#e05244' }} />
						</span> */}
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
