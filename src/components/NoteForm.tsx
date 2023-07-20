
import { FormEvent, useRef, useState } from 'react'
import { Button, Col, Form, FormControl, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, Tag } from '../types/types'

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

export default function NoteForm ({onSubmit}: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const markDownRef = useRef<HTMLTextAreaElement>(null)
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        onSubmit({
            title: titleRef.current!.value
            markdown: markDownRef.current!.value
            tags: []
        })
    }

    return (
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect 
                            value={setSelectedTags.map((tag)=>{
                                return {label: tag.label, value:tag.id}
                            })}
                            isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='markdown'>
                    <Form.Label>Body</Form.Label>
                    <FormControl ref={markDownRef} required as="textarea" />
                </Form.Group>
            </Stack>
            <Stack direction="horizontal" className='my-4 justify-content-end' gap={2}>
                <Button type='submit' variant='primary'>Save</Button>
                <Link to="..">
                <Button type='button' variant='outline-secondary'>Cancel</Button>
                </Link>
            </Stack>
        </Form>
    )
}

