import { useState } from "react"
import { CheckoutContainer, SideBar, Card, Button, Grupo, Linha, Linha1, Linha2, Overlay, Confirmacao, DivBotoes } from "./styles"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from "../../services/api"

const Checkout = () => {
    const [isEntrega, SetEntrega] = useState(true)
    const [purchase, { isLoading, isError, data, isSuccess }] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            fullName: '',
            description: '',
            city: '',
            zipCode: '',
            streetNumber: '',
            complement: '',
            cardOwner: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(5,'O nome deve ter pelo menos 5 caracteres').required('Este campo é obrigatório'),
            description: Yup.string().required('Este campo é obrigatório'),
            city: Yup.string().required('Este campo é obrigatório'),
            zipCode: Yup.string().required('Este campo é obrigatório'),
            streetNumber: Yup.string().required('Este campo é obrigatório'),
            complement: Yup.string(),
            cardOwner: Yup.string().min(5,'O nome precisa ter pelo menos 5 caracteres').required('Este campo é obrigatório'),
            cardNumber: Yup.string().required('Este campo é obrigatório'),
            cardCode: Yup.number().required('Este campo é obrigatório'),
            expiresMonth: Yup.number().required('Este campo é obrigatório'),
            expiresYear: Yup.number().required('Este campo é obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                products: [
                    {
                        id: 1,
                        price: 10
                    }
                ],
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.description,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: Number(values.streetNumber),
                        complement: values.complement
                    }
                },
                payment: {
                    card: {
                        name: values.cardOwner,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        }
                    }
                }
            })
        }
    })

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if (isTouched && isInvalid) return message
        return ''
    }

    const checkInput = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid
        return hasError
    }

    return (
        <CheckoutContainer className= "isOpen">
            <Overlay />
            <SideBar>
            {isSuccess ? (
                <Confirmacao>
                    <h2>Pedido Realizado - {data.orderId}</h2>
                    <p>
                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                    </p>
                    <p>
                        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
                    </p>
                    <p>
                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                    </p>
                    <p>
                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica.
                    </p>
                    <p>
                        Bom apetite!
                    </p>
                    <DivBotoes>
                        <Button type="button">Concluir</Button>
                    </DivBotoes>
                </Confirmacao>
                ) : (
                <form onSubmit={form.handleSubmit}>
                    {isEntrega ? (
                        <Card>
                            <h2>Entrega</h2>
                            <Linha>
                                <label htmlFor="fullName">Quem irá receber</label>
                            </Linha>
                            <Linha>
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName" value={form.values.fullName}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInput('fullName') ? 'error' : ''}
                                />
                                {/* <small>{getErrorMessage('fullName',form.errors.fullName)}</small> */}
                            </Linha>
                            <Linha>
                                <label htmlFor="description">Endereço</label>
                            </Linha>
                            <Linha>
                                <input
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={form.values.description}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    />
                                <small>{getErrorMessage('description', form.errors.description)}</small>
                            </Linha>
                            <Linha>
                                <label htmlFor="city">city</label>
                            </Linha>
                            <Linha>
                                <input
                                    id="city"
                                    type="text"
                                    name="city"
                                    value={form.values.city}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    />
                                <small>{getErrorMessage('city', form.errors.city)}</small>
                            </Linha>
                            <Grupo>
                                <Linha1>
                                    <label htmlFor="zipCode" >CEP</label>
                                    <label htmlFor="streetNumber" >Número</label>
                                </Linha1>
                                <Linha2>
                                    <input
                                        id="zipCode"
                                        type="text"
                                        name="zipCode"
                                        value={form.values.zipCode}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}/>
                                    <input id="streetNumber" type="text" name="streetNumber" value={form.values.streetNumber} onChange={form.handleChange}/>
                                </Linha2>
                                <Linha1>
                                    <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
                                    <small>{getErrorMessage('streetNumber', form.errors.streetNumber)}</small>
                                </Linha1>
                            </Grupo>
                            <Linha>
                                <label htmlFor="complement">complement (opcional)</label>
                            </Linha>
                            <Linha>
                                <input
                                    id="complement"
                                    type="text"
                                    name="complement"
                                    value={form.values.complement}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    />
                                <small>{getErrorMessage('complement', form.errors.complement)}</small>
                            </Linha>
                            <DivBotoes>
                                <Button type="button" onClick={() => SetEntrega(false)}>Continuar com o Pagamento</Button>
                                <Button type="button">Voltar para o Carrinho</Button>
                            </DivBotoes>
                        </Card>
                    ) : (
                        <Card>
                            <h2>Pagamento - Valor a Pagar</h2>
                            <Linha>
                                <label htmlFor="cardOwner">Nome no cartão</label>
                            </Linha>
                            <Linha>
                                <input 
                                    id="cardOwner"
                                    type="text"
                                    name="cardOwner"
                                    value={form.values.cardOwner}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    />
                                    <small>{getErrorMessage('cardOwner', form.errors.cardOwner)}</small>
                            </Linha>
                            <Grupo>
                                <Linha1>
                                    <label htmlFor="cardNumber">Number do cartão</label>
                                    <label htmlFor="cardCode">CVV</label>
                                </Linha1>
                                <Linha2>
                                    <input 
                                        id="cardNumber"
                                        type="text"
                                        name="cardNumber"
                                        value={form.values.cardNumber}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        />
                                    <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                                    <input 
                                        id="cardCode"
                                        type="text"
                                        name="cardCode"
                                        value={form.values.cardCode}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        />
                                    <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                                </Linha2>
                                <Linha1>
                                    <label htmlFor="expiresMonth" >Mês de vencimento</label>
                                    <label htmlFor="expiresYear" >Ano de Vencimento</label>
                                </Linha1>
                                <Linha2>
                                    <input
                                        id="expiresMonth"
                                        type="text"
                                        name="expiresMonth"
                                        value={form.values.expiresMonth}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        />
                                    <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                                    <input
                                        id="expiresYear"
                                        type="text"
                                        name="expiresYear"
                                        value={form.values.expiresYear}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        />
                                    <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                                </Linha2>
                            </Grupo>
                            <DivBotoes>
                                <button type='submit'>Finalizar Pagamento</button>
                                <Button type="button" onClick={() => SetEntrega(true)}>Voltar para a edição de endereço</Button>
                            </DivBotoes>
                        </Card>
                    )}
                </form>
                )}
            </SideBar>
        </CheckoutContainer>
    )
}

export default Checkout